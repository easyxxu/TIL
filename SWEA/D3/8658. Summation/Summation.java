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
			int[] arr = new int[10];
			int sum = 0;
			for(int i=0;i<10;i++) {
				sum = 0;
				String num = st.nextToken();
				for(int j=0;j<num.length();j++) { // 각 자리수의 합 구하기
					sum += (num.charAt(j) - '0');
				}
				arr[i] = sum;
			}
			
			int max = 0;
			int min = arr[0];
			for(int i=0;i<10;i++) {
				max = Math.max(max, arr[i]);
				min = Math.min(min, arr[i]);
			}
			sb.append("#"+tc+" "+max+" "+min+"\n");
		}
		System.out.print(sb);
	}
}