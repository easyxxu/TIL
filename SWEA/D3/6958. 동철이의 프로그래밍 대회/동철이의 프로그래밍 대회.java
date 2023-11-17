import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(st.nextToken());
			int M = Integer.parseInt(st.nextToken());
			int[] arr = new int[N];
			int max = 0;
			int cnt = 0;
			for(int i=0;i<N;i++) {
				st = new StringTokenizer(br.readLine());
				for(int j=0;j<M;j++) {
					arr[i] += Integer.parseInt(st.nextToken());
				}
				max = Math.max(max, arr[i]);
			}
			for(int i=0;i<N;i++) {
				if(arr[i] == max) cnt++;
			}
			sb.append("#"+tc+" "+cnt+" "+max+"\n");
		}
		System.out.print(sb);
	}
}