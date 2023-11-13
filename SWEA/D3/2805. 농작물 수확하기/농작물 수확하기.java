import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		
		for(int tc = 1;tc <= T;tc++) {
			int N = Integer.parseInt(br.readLine());
			int[][] arr = new int[N][N];
			int sum = 0;
			
			for(int i=0;i<N;i++) {
				String str = br.readLine();
				for(int j=0;j<N;j++) {
					arr[i][j] = Integer.parseInt(str.substring(j,j+1));
				}
			}
			int start = N/2;
			int end = N/2;
			for(int i=0;i<N;i++) {
				for(int j=start;j<=end;j++) {
					sum += arr[i][j];
				}
				if(i<N/2) {
					start -= 1;
					end += 1;
				}else {
					start += 1;
					end -= 1;
				}
			}
			sb.append("#"+tc+" "+sum+"\n");
		}
		System.out.print(sb);
	}
}